import { CardProps } from './interfaces';
import { CardStyle } from './styles';

export const Card = ({ text }: CardProps) => {
    return <CardStyle>{text}</CardStyle>;
};
