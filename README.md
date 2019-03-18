# sketch-selector

> A Sketch plugin for changing or creating a selection of layers based on name, type or similarity

## Usage

### Select By Name

- Selects layers that match a given name or regular expression
- Filters the selected layers, or makes a new selection of layers on the current page if the selection is empty
- Can be optionally configured to match one particular layer type

### Select By Type

- Selects layers of one particular type:
  - Artboard
  - Group
  - Text Layer
  - Shape Layer
  - Symbol Instance
  - Image
  - Slice
  - Hotspot
  - Hidden
- Filters the selected layers, or makes a new selection of layers on the current page if the selection is empty

### Select Same

- Selects layers that have one particular attribute that is the same as the one selected layer:
  - Name
  - Text Style or Layer Style
  - Symbol Instance
- Exactly one layer must be selected before executing this command

## Installation

1. [Download and unzip the latest release.](https://github.com/yuanqing/sketch-selector/releases)
2. Double-click `Selector.sketchplugin` to install.

## License

[MIT](LICENSE.md)
