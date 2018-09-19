# Function Modules

[[toc]]

## General

### Move negative sign to the front

SAP by default shows negative number with minus at the end like `30-`. To change
it to `-30` we need to use `CLOI_PUT_SIGN_IN_FRONT`. `VALUE` should be of 
character type

```abap
CALL FUNCTION 'CLOI_PUT_SIGN_IN_FRONT'
    CHANGING
        VALUE         = lv_number.
```

## Data Dictionary

### Fetching Fixed Values from Domain

Fetch the Fixed Values or Ranges maintained in a domain with `DD_DOMA_GET`
into tables of type `DD07V`.

```abap
    DATA:
        lt_dd01v_tab_a TYPE STANDARD TABLE OF dd07v,
        lt_dd01v_tab_n TYPE STANDARD TABLE OF dd07v.

    CALL FUNCTION 'DD_DOMA_GET'
        EXPORTING
            domain_name         = 'GESCH'
*           GET_STATE           = 'M  '
            langu               = sy-langu
*           PRID                = 0
            withtext            = 'X'
*       IMPORTING
*           DD01V_WA_A          =
*           DD01V_WA_N          =
*           GOT_STATE           =
        TABLES
            dd07v_tab_a         = lt_dd01v_tab_a
            dd07v_tab_n         = lt_dd01v_tab_n
        EXCEPTIONS
            illegal_value       = 1
            op_failure          = 2
            OTHERS              = 3.
```

## Module Pool

### Set values to a Dropdown/Listbox

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