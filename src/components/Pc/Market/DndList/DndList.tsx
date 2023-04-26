import React, {FC, createRef, useEffect, useMemo, useRef, useState} from 'react';
import {
    DndContext,
    closestCenter,
    DragEndEvent,
    useSensors,
    useSensor,
    MouseSensor,
    KeyboardSensor,
    TouchSensor,
    useDndMonitor,
} from '@dnd-kit/core';
import {
    SortableContext,
    rectSortingStrategy,
    useSortable,
    arrayMove,
} from '@dnd-kit/sortable';
import {IconHome} from '@douyinfe/semi-icons';
import {CSS} from '@dnd-kit/utilities';
import {indexOf} from 'lodash';

interface CardProps {
    item: string;
    operationText: string;
    onClickHandler: any;
  }

const Card: FC<CardProps> = ({item, operationText, onClickHandler}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: item});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
    };

    useDndMonitor({
        onDragStart() {},
        onDragMove() {},
        onDragOver() {},
        onDragEnd(event) {
            if (Math.abs(event.delta.x) < 2 && Math.abs(event.delta.y) < 2 && event.active.id !== 'Block_1') {
                onClickHandler(event.active.id);
            }
        },
        onDragCancel() {},
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className="mx-2"
        >
            <div
                // eslint-disable-next-line max-len
                className="flex md:w-full flex-row h-[3rem] px-3 m-2 bg-gray-200 hover:bg-gray-100 rounded-lg cursor-pointer justify-between"
            >
                <div className="flex flex-row">
                    <div className="self-center">
                        <IconHome size="extra-large" className="" />
                    </div>
                    <div className="self-center ml-2">
                        <div className="font-bold">{item}</div>
                    </div>
                </div>
                <div className="font-semibold text-lg self-center">
                    {operationText}
                </div>
            </div>
        </div>
    );
};

interface DndListProps {
    data: string[];
    setAddBlock: any;
    onClickHandler: any;
    operationText: string;
}

const DndList: FC<DndListProps> = ({data, setAddBlock, onClickHandler, operationText}) => {
    const [items, setItems] = useState(data);

    useEffect(
        () => {
            setItems(data);
        },
        [data]
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;
        if (over && active.id !== over.id && active.id !== 'Block_1') {
            if (over.id !== 'Block_1') {
                setItems(arrayMove(items, indexOf(items, active.id), indexOf(items, over.id)));
                setAddBlock(items);
            }
        }
    };

    const mouseSensor = useSensor(MouseSensor, {
        // Press delay of 250ms, with tolerance of 5px of movement
        activationConstraint: {
            delay: 5,
            tolerance: 5,
        },
    });
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);

    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor
    );

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            sensors={sensors}
        >
            <SortableContext
                items={items}
                strategy={rectSortingStrategy}
            >
                <div className="grid grid-cols-4">
                    {items.map(item => {
                        return (
                            <Card key={item} item={item} operationText={operationText} onClickHandler={onClickHandler} />
                        );
                    })}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default DndList;
