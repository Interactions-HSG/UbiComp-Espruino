#include "jswrap_infxl.h"
#include "infXL.h"

// Let's define the JavaScript class that will contain our `model()` method. We'll call it `Hello`
/*JSON{
  "type" : "class",
  "class" : "Infxl"
}*/

/*JSON{
  "type" : "staticmethod",
  "class" : "Infxl",
  "name" : "model",
  "generate" : "jswrap_puck_infXL",
  "return" : ["int", "ID of most probably classification" ]
}
Calls the infXL model and returns its prediction.
*/
JsVarInt jswrap_puck_infXL() {
  uint8_t ret = run_infxl_model();
  
  return ((JsVarInt)ret) ;
}