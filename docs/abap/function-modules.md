# Function Modules

## General

### Move Negative Sign To The Front

SAP by default shows negative number with minus at the end like `30-`. To change
it to `-30` we need to use `CLOI_PUT_SIGN_IN_FRONT`. `VALUE` should be of 
character type

```abap
CALL FUNCTION 'CLOI_PUT_SIGN_IN_FRONT'
    CHANGING
        VALUE         = lv_number.
```

## Module Pool

### Set Values To A Dropdown/Listbox

To set values to a Dropdown/Listbox for a Module Pool field or Selection
Screen field use `VRM_SET_VALUES`.

```abap
DATA(lt_type) = VALUE vrm_values(
    ( key = 'TYPE1' text = 'Type 1' )
    ( key = 'TYPE2' text = 'Type 2' )
).

CALL FUNCTION 'VRM_SET_VALUES'
    EXPORTING
      id     = 'S_ACT-TYPE'
      values = lt_type
    EXCEPTIONS
      ID_ILLEGAL_NAME       = 1
      OTHERS = 2.
```