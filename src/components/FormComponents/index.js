/** Helpers */
import {
	validateEmail,
	validateConfirmPassword,
	validateMaximumLength,
	validateMinimumLength,
	validateRequired,
	validateValueIsUrlOfType,
} from './Validators/';

/** Components */
import TextField from './components/TextField';
import TextArea from './components/TextArea';
import Select from './components/Select';
import Radios from './components/Radios';
import Radio from './components/Radio';
import MultiSelect from './components/MultiSelect';
import Dropzone from './components/Dropzone';
import Checkboxes from './components/Checkboxes';
import Checkbox from './components/Checkbox';
import CalendarPicker from './components/CalendarPicker';

const Validators = {
	validateEmail,
	validateConfirmPassword,
	validateMaximumLength,
	validateMinimumLength,
	validateRequired,
	validateValueIsUrlOfType,
};

export {
	TextField,
	TextArea,
	Select,
	MultiSelect,
	Radio,
	Radios,
	Checkbox,
	Checkboxes,
	Dropzone,
	CalendarPicker,
	Validators,
};
