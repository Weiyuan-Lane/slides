import PropTypes from 'prop-types';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';
const basePathEndsWithSlash = basePath.endsWith('/');

export default function BasePathA({ href, children, ...props }){
  let finalHref
  if (basePathEndsWithSlash || href.startsWith('/')) {
    finalHref = `${basePath}${href}`;
  } else {
    finalHref = `${basePath}/${href}`;
  }

  return (
    <a 
      href={href}
      as={finalHref}
      {...props}>
      {children}
    </a>
  );
}

BasePathA.propTypes = {
  href: PropTypes.string.isRequired,
};

