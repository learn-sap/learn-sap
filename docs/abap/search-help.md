# Search Help

```abap
 data: str type string.

   field-symbols: <G00> type table.

   field-symbols: <G00_WA> type any.

* Enter the below ABAP code under END-OF-SELECTION(after list) Event:

   str = ‘%g00[]’.

   ASSIGN (str) TO <G00>.

   loop at <G00> assigning <G00_WA>.

*   …do whatever you like here….

   endloop.
```