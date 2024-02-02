- #### Logo

| Prop       | Default   | Description                                                    |
| ---------- | --------- | -------------------------------------------------------------- |
| `location` | undefined | required, choose the position you'd need :'header' or 'footer' |

- #### MainNav

| Prop       | Default   | Description                                                  |
| ---------- | --------- | ------------------------------------------------------------ |
| `location` | undefined | required, choose the position you'd need :'header' or 'menu' |
| 'onClose'  | undefined | click handler                                                |

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

- #### Button

A button or link component. Can accept an SVG icon component as children. The
`link` prop enables the link mode, the value of which will be used in the href
tag from NextLink. Props `text` - the text that will be displayed in the button
or link. `btnStyle` sets the style of the stylized button, has the following
options: `primary`, `accent`, `submit`, `transparent`. `className` is a prop
that can be used to pass styles that will override common button or link styles

| Prop        | Default     | Description                                                                              |
| ----------- | ----------- | ---------------------------------------------------------------------------------------- |
| `link`      | `undefined` | `string` or `undefined` toggles changes the button tag to a link tag, the value must     |
|             |             | contain a site link or section ID.                                                       |
| `text`      | `undefined` | required, `string`, the text displayed in the button                                     |
| `children`  | `undefined` | ReactNode embedded components                                                            |
| `btnStyle`  | `primary`   | sets the type of stylization, can be: `primary` or `accent` or `submit` or `transparent` |
| `className` | `undefined` | `string`, allows you to override common styles                                           |

- #### Slider

| Prop             | Default     | Description                                                                                               |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `slideComponent` | -           | required, `React.FC<any>`, It`s the comenent that will be rendered as side.                               |
| `slidesData`     | -           | required, `Record<string, any>[]`, It is a array with slide`s objects                                     |
| `section`        | -           | required, `cases`, `reviews`, `partners`, `advantages`, name of the section where slider will be rendered |
| `wrapClassName`  | `undefined` | optional, `string`, adds custom css class to the Swiper component.                                        |
| `slideClassName` | `undefined` | optional, `string`, adds custom css class to the SlideComponenet component.                               |

- #### SliderControls

| Prop            | Default     | Description                                                                                            |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `section`       | -           | required, `cases`, `reviews`, `advantages`, name of the section where sliderControls will be rendered. |
| `wrapClassName` | `undefined` | optional, `Record<string, any>[]`, adds custom css class on the div that wraps control buttons.        |

- #### Accordeon

The accordion component takes the accordion element component as children, and
stores the state of the element. By default, the first element has an expanded
state. Only one item can be deployed at a time

| Prop       | Default     | Description                                         |
| ---------- | ----------- | --------------------------------------------------- |
| `children` | `undefined` | Built-in ReactNode components, an accordion element |

- #### AccordeonOfferItem

Component is an accordion element that contains a title, description, and image

| Prop    | Default     | Description                                                                                                                         |
| ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `data`  | `undefined` | data to be displayed in the component must contain a `title`:`string`, `description`:`string`, `image`:`string` - path to the image |
| `index` | `undefined` | `number`, the index of the expanded element                                                                                         |
| `aria`  | `undefined` | `string`, text to fill the aria label for the icon                                                                                  |

- #### AccordeonFAQItem

Component is an accordion element that contains a question and answer.

| Prop    | Default     | Description                                                                                  |
| ------- | ----------- | -------------------------------------------------------------------------------------------- |
| `data`  | `undefined` | data to be displayed in the component must contain a `question`:`string`, `answer`:`string`, |
| `index` | `undefined` | `number`, the index of the expanded element                                                  |
| `aria`  | `undefined` | `string`, text to fill the aria label for the icon                                           |

- #### FormField

This is a styled input component with an accompanying label and FormError.

| Prop          | Default     | Description                                                                       |
| ------------- | ----------- | --------------------------------------------------------------------------------- |
| `label`       | `undefined` | required, `string`, label value                                                   |
| `type`        | `undefined` | required, `string`, input type                                                    |
| `placeholder` | `undefined` | required, `string`, input placeholder                                             |
| `name`        | `undefined` | required, `string`, input name                                                    |
| `register`    | `undefined` | required, `func` register onChange, onBlur, name, validation from React Hook Form |
| `errors`      | `undefined` | required, errors `object` from React Hook Form.                                   |
| `className`   | `""`        | optional, `string`, allows you to override common styles                          |

- #### FormPhoneField

This is a styled textarea component with an accompanying label and FormError tha
formatt numeric input according pattern.

| Prop          | Default     | Description                                                                                 |
| ------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `label`       | `undefined` | required, `string`, label value                                                             |
| `placeholder` | `undefined` | required, `string`, input placeholder                                                       |
| `name`        | `undefined` | required, `string`, textarea name                                                           |
| `control`     | `undefined` | required, `object` object contains methods for registering components into React Hook Form. |
| `errors`      | `undefined` | required, errors `object` from React Hook Form.                                             |
| `className`   | `""`        | optional, `string`, allows you to override common styles                                    |

- #### FormListbox

This is a styled Listbox component (using Listbox @headless library) with an
accompanying label and FormError. Rendered as `button` + open/hide list `ul`

| Prop          | Default     | Description                                                                                 |
| ------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `label`       | `undefined` | required, `string`, label value                                                             |
| `placeholder` | `undefined` | required, `string`, label for button                                                        |
| `name`        | `undefined` | required, `string`, form's element name                                                     |
| `variants`    | `undefined` | required, `string's array`, options to choose                                               |
| `control`     | `undefined` | required, `object` object contains methods for registering components into React Hook Form. |
| `errors`      | `undefined` | required, errors `object` from React Hook Form.                                             |
| `className`   | `""`        | optional, `string`, allows you to override common styles                                    |

- #### FormTextArea

This is a styled textarea component with an accompanying label and FormError.

| Prop          | Default     | Description                                                                       |
| ------------- | ----------- | --------------------------------------------------------------------------------- |
| `label`       | `undefined` | required, `string`, label value                                                   |
| `placeholder` | `undefined` | required, `string`, textarea placeholder                                          |
| `name`        | `undefined` | required, `string`, textarea name                                                 |
| `register`    | `undefined` | required, `func` register onChange, onBlur, name, validation from React Hook Form |
| `errors`      | `undefined` | required, errors `object` from React Hook Form.                                   |
| `className`   | `""`        | optional, `string`, allows you to override common styles                          |

- #### FormCheckbox

This is a styled checkbox input component with an accompanying label in a form.

| Prop        | Default     | Description                                                                       |
| ----------- | ----------- | --------------------------------------------------------------------------------- |
| `label`     | `undefined` | required, `string`, label value                                                   |
| `name`      | `undefined` | required, `string`, input name                                                    |
| `register`  | `undefined` | required, `func` register onChange, onBlur, name, validation from React Hook Form |
| `errors`    | `undefined` | required, errors `object` from React Hook Form.                                   |
| `className` | `""`        | optional, `string`, allows you to override common styles                          |

- #### FormError

This is a styled Error component for form's elements .

| Prop     | Default     | Description                                     |
| -------- | ----------- | ----------------------------------------------- |
| `name`   | `undefined` | required, `string`, input value name            |
| `errors` | `undefined` | required, errors `object` from React Hook Form. |

- #### FormPopup

This popup component rendered using Modal component.

| Prop        | Default | Description                                                              |
| ----------- | ------- | ------------------------------------------------------------------------ |
| `isOpen`    | `false` | required, `boolean`, changes state to show/close the popup.              |
| `isSuccess` | `false` | required, `boolean`, show styled Success or Error component with message |
| `onClose`   | -       | required, click handler for close popup window                           |
