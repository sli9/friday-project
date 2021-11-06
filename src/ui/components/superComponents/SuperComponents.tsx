import React from "react";
import SuperInputText from "./superInput/SuperInput";
import SuperButton from "./superButton/SuperButton";
import SuperCheckbox from "./superCheckbox/SuperCheckbox";

export const SuperComponents = () => {
  return <div>
    <div>
      <SuperInputText/>
    </div>
    <div>
      <SuperButton> Button </SuperButton>
    </div>
    <div>
      <SuperCheckbox/>
    </div>
  </div>
}
