/**
 * @file topbar
 * @author mickey.nbut@gmail.com
 */
import {FC, useCallback, useEffect, useState} from 'react';
interface TopBarProps {
    name: string;
    size: string;
    color: string;
};
const TopBar: FC<TopBarProps> = (
    {
        name,
        size = '',
        color = '',
    }
) => {
    const [iconContent, setIconContent] = useState('');
    const loadIcon = useCallback(
        async (iconName: string) => {
            const res = await fetch(`/icons/${iconName}.svg`);
            return await res.text(); 
        },
        []
    )

    useEffect(
        () => {
            const fetchIcon = async () => {
                const content = await loadIcon(name);
                setIconContent(content);
            };
            fetchIcon();
        },
        []
    );
    return (
        <span
            dangerouslySetInnerHTML={{__html: iconContent}}
            className={`w-10 h-10 inline-block icon ${size} ${color}`}
        ></span>
    );
}
export default TopBar;