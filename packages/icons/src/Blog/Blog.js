import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const Blog = forwardRef(function Blog(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path
        d="M7.179 20.9416H16.8973C17.9707 20.9416 18.8409 20.0714 18.8409 18.998V9.68229C18.8409 9.42454 18.7385 9.17736 18.5563 8.9951L13.2946 3.73343C13.1123 3.55118 12.8652 3.44879 12.6074 3.44879H7.179C6.10555 3.44879 5.23535 4.31899 5.23535 5.39244V18.998C5.23535 20.0714 6.10555 20.9416 7.179 20.9416Z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12256 15.3536H15.1965"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12256 12.3167H15.1965"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12256 9.27972H12.1595"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
});

export default Blog;
