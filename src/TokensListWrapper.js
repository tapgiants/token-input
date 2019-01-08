import React from 'react';
import TokenPicker from './TokenPicker';

const TokensListWrapper = ({
  name,
  label,
  pickerQuery,
  pickerPath,
  filterInputMapper,
  tokenMapper,
  requestProvider,
  children,
  addOption,
  formCtx,
  FieldCtxComponent
}) => (
    <React.Fragment>
      <TokenPicker
        name={name}
        label={label}
        pickerQuery={pickerQuery}
        pickerPath={pickerPath}
        filterInputMapper={filterInputMapper}
        tokenMapper={tokenMapper}
        requestProvider={requestProvider}
        onSelect={(item) => addOption(item)}
        formCtx={formCtx}
        FieldCtxComponent={FieldCtxComponent}
      />

      <ul className="token-list">
        {children}
      </ul>
    </React.Fragment>
  );

export default TokensListWrapper;
