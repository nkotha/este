// @flow
import Box from './box';
import Text from './text';
import TextInput, { type TextInputProps } from './text-input';

const TextInputBig = (props: TextInputProps) => {
  // Note pattern for default dynamic typed props:
  // - we can't use defaultProps because often we need values from context theme
  // - props must be picked, Flow does not handle: height={1} {...props}
  // Therefore, this is the only correct way.
  const {
    borderBottomWidth = 1,
    borderColor = 'gray',
    borderStyle = 'solid',
    error,
    paddingVertical = 0.5,
    size = 1,
    ...restProps
  } = props;
  return (
    <Box>
      <TextInput
        borderBottomWidth={borderBottomWidth}
        borderColor={borderColor}
        borderStyle={borderStyle}
        paddingVertical={paddingVertical}
        size={size}
        {...restProps}
      />
      <Text color="danger" minHeight={1} size={size - 1}>
        {error}
      </Text>
    </Box>
  );
};
export default TextInputBig;
