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

const FormComponents = {
	TextField,
	TextArea,
	Select,
	MultiSelect,
	Checkbox,
	Checkboxes,
	Radio,
	Radios,
	CalendarPicker,
	Dropzone,
	Validators: {
		validateEmail,
		validateConfirmPassword,
		validateMaximumLength,
		validateMinimumLength,
		validateRequired,
		validateValueIsUrlOfType,
	},
};

export default FormComponents;
