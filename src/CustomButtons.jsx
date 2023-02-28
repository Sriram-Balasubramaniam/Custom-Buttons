import { createElement } from "react";

import { Button } from "./components/Button";
import "./ui/CustomButtons.css";

export function CustomButtons({ textButton, classButton, buttonAction, textColor, borderColor, fillColor }) {
    return (
        <Button
            textButton={textButton}
            classButton={classButton}
            buttonAction={buttonAction}
            textColor={textColor}
            borderColor={borderColor}
            fillColor={fillColor}
        />
    );
}
