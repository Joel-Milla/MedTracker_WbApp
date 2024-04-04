// Redux connection
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
// External Components
import { Badge } from "@tremor/react";
// Own Components
import DelimiterPersianGreen from "./DelimiterPersianGreen";

interface TitleProps {
    titulo: string;
    badge: number;
}

function Title({ titulo, badge }: TitleProps) {
    return (
        <>
            {/* Show the title with a bage that says the current amount of symptoms shared */}
            {/* Use flex with gap of 3 to have the items in a single row with some space between them. Add margin bottom to have space between title and delimiter */}
            <div className="flex gap-3 mb-2">
                <h3 className="text-3xl">{titulo}</h3>
                <Badge size="xs">{badge}</Badge>
            </div>
            {/* Use the delimiter with custom color persian green that expands full width */}
            <DelimiterPersianGreen />
        </>
    );
}

export default Title;
