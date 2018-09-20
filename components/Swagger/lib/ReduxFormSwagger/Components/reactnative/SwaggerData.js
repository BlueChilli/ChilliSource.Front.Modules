
import SwaggerDataCreator from "../SwaggerDataCreator";
import InlineSpinner from "../Views/native/InlineSpinner/InlineSpinner";
import GenericError from "../Views/native/GenericError";

const SwaggerData = SwaggerDataCreator(InlineSpinner, GenericError);
export default SwaggerData;