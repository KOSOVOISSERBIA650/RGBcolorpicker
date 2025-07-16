(function(Scratch) {
  'use strict';

  class RGBColorPicker {
    getInfo() {
      return {
        id: 'rgbColorPicker',
        name: 'RGB Color Picker',
        blocks: [
          {
            opcode: 'rgbToHex',
            blockType: Scratch.BlockType.REPORTER,
            text: 'color from R [R] G [G] B [B]',
            arguments: {
              R: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 255
              },
              G: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          }
        ]
      };
    }

    rgbToHex(args) {
      const clamp = (val) => Math.max(0, Math.min(255, Math.round(val)));
      const r = clamp(args.R).toString(16).padStart(2, '0');
      const g = clamp(args.G).toString(16).padStart(2, '0');
      const b = clamp(args.B).toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }
  }

  Scratch.extensions.register(new RGBColorPicker());
})(Scratch);