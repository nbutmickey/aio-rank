/**
 * @file detail page
 * @author mickey.nbut@gmail.com
 */
import cx from 'classnames';
import Icon from '@components/Common/Icon';

interface DetailProps {
    msg: string;
}

function Detail(props: DetailProps) {
    const { msg } = props;
    return (
        <>
            <h1 className={cx('text-3xl', 'font-bold', 'text-center')}>{ msg }</h1>
            <Icon name='like' size='h-15' color='red' />
        </>
    );
};

export const getServerSideProps = () => {
    return {
        props: {
            msg: 'Hello AIO',
        }
    };
};

export default Detail;
