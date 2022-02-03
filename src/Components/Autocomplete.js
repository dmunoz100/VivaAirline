import { ReactSearchAutocomplete } from 'react-search-autocomplete'
export const Autocomplete = props => {

    const {
        placeholder,
        items,
        name,
        formik,
    } = props;

    
      const handleOnSearch = (string, results) => {
          
      }
    
      const handleOnSelect = (item) => {
        formik.setFieldValue(name,item);
      }
    
 
    
      const formatResult = (item) => {
        return item
    
      }

      const handleClear = () =>{
        formik.setFieldValue(name,null);
      }


    return (
        <ReactSearchAutocomplete
        inputSearchString = {formik.values[name] ? formik.values[name].name : ""}
        items={items}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        formatResult={formatResult}
        onClear = {handleClear}
        placeholder = {placeholder}
      />
    );
}