import {Button, ButtonProps} from 'react-native';

export function BotaoCustomizado({...rest}: ButtonProps) {
    return (
        <Button {...rest}/>
    );
}