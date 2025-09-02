// Format Date Internally
function formatDateInternally(date) {
  if(!date) return "";
  return Utilities.formatDate(new Date(date), TIMEZONE, INTERNAL_DATE_FORMAT);
}

// ========================================================================================

function formatDateInternallyWithDash(date) {
  if(!date) return "";
  return Utilities.formatDate(new Date(date), TIMEZONE, INTERNAL_DATE_FORMAT_DASH);
}

// ========================================================================================

function formatDateInternallyWithSlash(date) {
  if(!date) return "";
  return Utilities.formatDate(new Date(date), TIMEZONE, INTERNAL_DATE_FORMAT_SLASH);
}

// ========================================================================================

function calculateDays(date1,date2) {
  if(!date1 || !date2) return 0;
  
  let differenceInTime = date2.getTime() - date1.getTime(); 
  return Math.floor(differenceInTime = differenceInTime / (1000 * 3600 * 24));
}

// ========================================================================================
