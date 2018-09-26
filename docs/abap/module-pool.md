# Module Pool Programming

## Table Control

### Modifying Column Property in PBO

This module has to be added to PBO section of the Screen in `SE51`. If you
were using a wizard, you will have a commented line with the module name
already. Just uncomment it, double click to create the module and then
add the following code.

```abap
MODULE tc_actions_change_col_attr OUTPUT.

    "Show the table with all columns in display mode.

    IF psyst-nselc EQ yes.
      IF psyst-ioper EQ display.
        "tc_actions is a Table Control
        LOOP AT tc_actions-cols ASSIGNING FIELD-SYMBOL(<fs_col>).
          <fs_col>-screen-input = 0.
        ENDLOOP.
      ENDIF.
    ENDIF.

ENDMODULE.
```