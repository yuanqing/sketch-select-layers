# sketch-selector

> A Sketch plugin for manipulating the selection based on name, type, and similarity

## Usage

### Select By Name

- Selects layers that match a given layer name or regular expression
- Filters the selected layers, or makes a selection from layers on the current page if the selection is empty
- Can be configured to perform an exact match, or match a specific layer type

### Select By Type

- Selects layers of a given type
- Type can be one of:
  - Artboard
  - Group
  - Text Layer
  - Shape Layer
  - Symbol Instance
  - Image
  - Slice
  - Hotspot
- Filters the selected layers, or makes a selection from layers on the current page if the selection is empty

### Select Same

- Selects layers that are the same as the selected layer
- Equivalence can be based on one of:
  - Name
  - Text Style or Layer Style
  - Symbol Instance

## Installation

1. [Download and unzip the latest release.](https://github.com/yuanqing/sketch-selector/releases)
2. Double-click `Selector.sketchplugin` to install.

## License

[MIT](LICENSE.md)
