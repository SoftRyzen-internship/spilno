- #### Button

| Prop             | Default     | Description                                                                              |
| ---------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `link`           | `undefined` | `string` or `undefined` toggles changes the button tag to a link tag, the value must     |
|                  |             | contain a site link or section ID.                                                       |
| `text`           | `undefined` | required, `string`, the text displayed in the button                                     |
| `children`       | `undefined` | ReactNode embedded components                                                            |
| `type`           | `button`    | defines the type of button, can only be `button` or `submit` (only works for button!)    |
| `disabled`       | `false`     | `boolean`, enables disables button (only works for button!)                              |
| `actionHandler`  | `undefined` | function for handling the button click event                                             |
| `btnStyle`       | `primary`   | sets the type of stylization, can be: `primary` or `accent` or `submit` or `transparent` |
| `iconWrapStyles` | `undefined` | `string`, allows you to add styles to the children's wrapper                             |
| `textStyle`      | `undefined` | `string`, allows you to style the text of a button or link                               |
| `classNames`     | `undefined` | `string`, allows you to override common styles                                           |
