import * as Components from './styles';

type Props ={
    x: number;
    y: number;
}

export const Character = ({ x, y }: Props) => {
    const size = 30;
    return (
        <Components.Container
            size={size}
            left={x * size}
            top={y * size}
        >

        </Components.Container>
    );
}
