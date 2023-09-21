import React from 'react';
import { Slider } from 'antd';
import { debounce } from 'lodash-es';
import ColorPicker from './color-picker';

interface IController {
  handleSizeChange: (value: number) => void;
  handleColorChange: (value: string) => void;
}
export function Controller(props: IController) {
  const handleSizeChange = debounce(props.handleSizeChange, 500);
  const handleColorChange = debounce(props.handleColorChange, 500);
  return (
    <div className="controlPanel">
      <div className="controlContent">
        <div className="titleWrapper">
          <div className="title">单色图标预览</div>
        </div>
        <div className="sliderWrapper">
          <Slider
            className={'slider'}
            defaultValue={32}
            onChange={handleSizeChange}
            min={12}
            max={48}
          />
        </div>
        <ColorPicker
          className={'colorPicker'}
          handleColorChange={handleColorChange}
        />
      </div>
    </div>
  );
}
