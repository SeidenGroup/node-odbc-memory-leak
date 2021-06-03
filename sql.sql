create or replace procedure BARRY.PRICING_PGM (IN customer char(13), IN in_products char(7800), OUT outdata char(30266), OUT response char(131))

begin

  set outdata = 'ABCDEF';
  set response = 'all good yo';
  
end;

call BARRY.PRICING_PGM('abcd', '3o4itn34t3498g34g', ' ', ' ');