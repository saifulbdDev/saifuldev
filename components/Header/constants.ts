import { CalendarIcon } from "../Icons/Calendar"

import { ThemeIcon } from "../Icons/Theme"


type THeaderButton = {
    id:number,
    variant:'theme'|'language'|'calendar',
    icon?:JSX.Element,
}
export const headerButtons : THeaderButton[] = [
    {
        id:1,
        variant:'theme',
        icon:ThemeIcon(),
    },
    {
        id:2,
        variant:'calendar',
        icon:CalendarIcon(),
    },
   
    {
        id:4,
        variant:'language',
    },
]