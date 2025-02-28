export const mfConfig = {
  name: "host",
  filename: 'remoteEntry.js',
  remotes: {
    remote: 'components@http://localhost:3001/remoteEntry.js',
  },
  exposes: {},
  shared: {
    react: { singleton: true, requiredVersion: '^19.0.0' },
    'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
    tailwindcss: { singleton: true, requiredVersion: '^4.0.3' }, // Include Tailwind CSS
    postcss: { singleton: true, requiredVersion: '^8.2.1' }, // Include PostCSS
    'tailwindcss/postcss': { singleton: true, requiredVersion: '^4.0.3' }, // Include PostCSS
  },
};
