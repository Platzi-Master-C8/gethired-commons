import { forwardRef } from 'react';

const ButtonExample = forwardRef(function ButtonExample(props, ref) {
  return <button ref={ref} type="button" {...props} />;
});

export default ButtonExample;
