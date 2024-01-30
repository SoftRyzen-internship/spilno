- #### SectionTitle

| Prop         | Default | Description                                                  |
| ------------ | ------- | ------------------------------------------------------------ |
| `children`   | -       | required, `ReactNode`.                                       |
| `isWhite`    | `false` | optional, `boolean`, changes color to white.                 |
| `isCentered` | `false` | optional, `boolean`, adds css property `text-align: center`. |
| `className`  | ''      | optional, `string`, adds custom css class.                   |

- #### Modal

Pure Modal Component which expect `onClose`:implements close modal window by
mouse click on backdrop or by press `ESC` button, `isOpen` - state to show/hide
modal, `children` -content for modal.

| Prop            | Default | Description                                                   |
| --------------- | ------- | ------------------------------------------------------------- |
| `children`      | -       | required, `ReactNode`, which will be content for modal window |
| `isOpen`        | `false` | required, `boolean`, changes state to show/close the window.  |
| `onClose`       | -       | required, click handler for close modal window                |
| `modalStyle`    | ''      | optional, `string`, additional css class you'd need           |
| `backdropStyle` | ''      | optional, `string`, additional css class you'd need           |

- #### RingedImage

Rounded Image component `rounded-full` expect Next/Image component as children
prop with fill prop. Contains pseudo after element `ring`, positioned absolutely
looks as `2px white` border. Component expect `right` or `left` variants for
position the ring. With option `hero` for prop `ringType` realized special ring
`3px '#BFD5FF'` border, setup in config colors as heroRing.

| Prop        | Default | Description                                                                                   |
| ----------- | ------- | --------------------------------------------------------------------------------------------- |
| `children`  | -       | required, `ReactNode`, expect Image component with fill propery                               |
| `variant`   | -       | required, select the ring positioning option: `right` or `left`                               |
| `ringType`  | ``      | optional, realized ring `3px '#BFD5FF'` border for Hero Component                             |
| `className` | ''      | optional, `string`, You should set the width of component and additional css class you'd need |
