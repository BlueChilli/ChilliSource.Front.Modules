import InlineSpinner from "./views/InlineSpinner/InlineSpinner";
import GenericError from "./views/GenericError";
import SwaggerDataCreator from "../SwaggerDataCreator";

const SwaggerData = SwaggerDataCreator(InlineSpinner, GenericError);
export default SwaggerData;