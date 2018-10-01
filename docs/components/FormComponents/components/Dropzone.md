# Dropzone

THe `Dropzone` is a file uploader component. It can accept one or more files and you can even set restrictions on file type, size and count.

## Usage

- Basic

```js
<Dropzone name="demoDropzone" />
```

<br />

## Properties

| Property           | Required | Optional | Type       | Description                                                                                                 |
| ------------------ | -------- | -------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| name               | `true`   |          | `string`   | The unique name assigned to the field                                                                       |
| className          |          | `true`   | `string`   | Additional `class`es you'd like to add to the component                                                     |
| placeholder        |          | `true`   | `string`   | Text shown when the field has no value                                                                      |
| type               |          | `true`   | `string`   | Possible values are `url`, `email`, `text`, `password`, `number`, `tel`, `hidden`, `search`                 |
| multiple           |          | `true`   | `boolean`  | If true, allows the user to upload multiple files instead of just one. No previews will be shown when true. |
| helperText         |          | `true`   | `string`   | Text shown just below the label designed to further user understanding of the field                         |
| helperTextPosition |          | `true`   | `string`   | Position of helper text. Either above the input field(`top`) or below it(`bottom`). Default is `top`        |
| label              |          | `true`   | `string`   | The title for this field. It helps the user better understand what is required from them w.r.t. this field  |
| validate           |          | `true`   | `function` | A validitor function that validates the value currently in the field. Signature is `(value) => boolean`     |
| accept             |          | `true`   | `string`   | The file types allowed. See https://github.com/okonet/attr-accept                                           |
| maxSize            |          | `true`   | `number`   | Max size of file allowed to upload                                                                          |
| minSize            |          | `true`   | `number`   | Min size of file allowed to upload                                                                          |
