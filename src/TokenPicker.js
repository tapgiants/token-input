import React from 'react';
import { withGQLSearch, Autocomplete } from '@tapgiants/autocomplete';

export default ({
  name,
  label,
  pickerQuery,
  requestProvider,
  pickerPath,
  filterInputMapper,
  tokenMapper,
  formCtx,
  FieldCtxComponent,
  onSelect
}) => (
    <Autocomplete
      name={`${name}_picker`}
      label={label}
      dataMapper={tokenMapper}
      FieldCtxComponent={FieldCtxComponent}
      requestProvider={requestProvider}
      searchHandler={withGQLSearch({
        query: pickerQuery,
        path: pickerPath,
        filterInputMapper: filterInputMapper
      })}
      onSelect={onSelect}
      autoCleanup
      {...formCtx}
    />
  );
