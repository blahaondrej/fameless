const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
//const Nunjucks = require('nunjucks'); // used when the preprocessor is a function

const isProd = !process.argv.find((str) => str.includes('development'));

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'inline-source-map',
  stats: 'minimal',

  output: {
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
    // use aliases used in sources instead of relative paths like ../../
    alias: {
      '@views': path.join(__dirname, 'src/views/'),
      '@images': path.join(__dirname, 'src/assets/images/'),
      '@fonts': path.join(__dirname, 'src/assets/fonts/'),
      '@styles': path.join(__dirname, 'src/assets/styles/'),
      '@scripts': path.join(__dirname, 'src/assets/scripts/'),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      // verbose: 'auto', // output information about the process to console in development mode only

      entry: {
        // define HTML templates here
        index: 'src/views/pages/home/index.html', // => dist/index.html
        demo: {
          import: 'src/views/pages/demo/index.html', // => dist/demo.html
          data: {
            // pass data into template
            myVar: 'The string passed as the `myVar` variable from Webpack configuration.',
          },
        },
        /* about: 'src/views/pages/about/index.html', // => dist/about.html */
        about: {
          import: 'src/views/pages/about/index.html',
          filename: 'about/index.html' // Cesta, kam se má soubor vytvořit
        },
        products: {
          import: 'src/views/pages/products/index.html',
          filename: 'products/index.html' // Cesta, kam se má soubor vytvořit
        },
        productDetail: {
          import: 'src/views/pages/product-detail/index.html',
          filename: 'product-detail/index.html' // Cesta, kam se má soubor vytvořit
        },
        studie: {
          import: 'src/views/pages/studie/index.html',
          filename: 'studie/index.html' // Cesta, kam se má soubor vytvořit
        },
        blogDetail: {
          import: 'src/views/pages/blog-detail/index.html',
          filename: 'blog-detail/index.html' // Cesta, kam se má soubor vytvořit
        },
        blog: {
          import: 'src/views/pages/blog/index.html',
          filename: 'blog/index.html' // Cesta, kam se má soubor vytvořit
        },
        kontakt: {
          import: 'src/views/pages/kontakt/index.html',
          filename: 'kontakt/index.html' // Cesta, kam se má soubor vytvořit
        },
        partners: {
          import: 'src/views/pages/partners/index.html',
          filename: 'partners/index.html' // Cesta, kam se má soubor vytvořit
        },
        marketing: {
          import: 'src/views/pages/marketing/index.html',
          filename: 'marketing/index.html' // Cesta, kam se má soubor vytvořit
        },
        marketingBrand: {
          import: 'src/views/pages/marketing/brand-management-a-strategie.html',
          filename: 'marketing/brand-management-a-strategie.html' // Cesta, kam se má soubor vytvořit
        },
        marketingCopywriting: {
          import: 'src/views/pages/marketing/copywriting-obsahovy-marketing.html',
          filename: 'marketing/copywriting-obsahovy-marketing.html' // Cesta, kam se má soubor vytvořit
        },
        marketingEmail: {
          import: 'src/views/pages/marketing/email-marketing.html',
          filename: 'marketing/email-marketing.html' // Cesta, kam se má soubor vytvořit
        },
        marketingMarketing: {
          import: 'src/views/pages/marketing/marketing-na-socialnich-sitich.html',
          filename: 'marketing/marketing-na-socialnich-sitich.html' // Cesta, kam se má soubor vytvořit
        },
        marketingSeo: {
          import: 'src/views/pages/marketing/seo.html',
          filename: 'marketing/seo.html' // Cesta, kam se má soubor vytvořit
        },
        marketingSprava: {
          import: 'src/views/pages/marketing/sprava-ppc.html',
          filename: 'marketing/sprava-ppc.html' // Cesta, kam se má soubor vytvořit
        },
        marketingSpravaZbozi: {
          import: 'src/views/pages/marketing/sprava-zbozovych-srovnavacu.html',
          filename: 'marketing/sprava-zbozovych-srovnavacu.html' // Cesta, kam se má soubor vytvořit
        },
        marketingTvorbaWebu: {
          import: 'src/views/pages/marketing/tvorba-webu.html',
          filename: 'marketing/tvorba-webu.html' // Cesta, kam se má soubor vytvořit
        },
        marketingZlepseniPouzitelnosti: {
          import: 'src/views/pages/marketing/zlepseni-pouzitelnosti-webu.html',
          filename: 'marketing/zlepseni-pouzitelnosti-webu.html' // Cesta, kam se má soubor vytvořit
        },
        marketingGrafickaIdentita: {
          import: 'src/views/pages/marketing/graficka-identita-ux-ui.html',
          filename: 'marketing/graficka-identita-ux-ui.html' // Cesta, kam se má soubor vytvořit
        },
        marketingEshopy: {
          import: 'src/views/pages/marketing/eshopy-spolu-s-bs-shop.html',
          filename: 'marketing/eshopy-spolu-s-bs-shop.html' // Cesta, kam se má soubor vytvořit
        },
          
        404: './src/views/pages/404/index.html', // => dist/404.html

      },

      js: {
        // output filename of extracted JS from source script loaded in HTML via `<script>` tag
        filename: 'assets/js/[name].[contenthash:8].js',
        // inline: true; // inline compiled JS into HTML
      },

      css: {
        // output filename of extracted CSS from source style loaded in HTML via `<link>` tag
        filename: 'assets/css/[name].[contenthash:8].css',
        // inline: true; // inline compiled CSS into HTML
      },

      // render templates with the Nunjucks template engine
      preprocessor: 'nunjucks',
      // or you can use any template engine as a function like the following:
      //preprocessor: (content, { data }) => Nunjucks.renderString(content, data),
    }),
  ],

  module: {
    rules: [
      // styles
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },

      // fonts (load from `fonts` or `node_modules` directory only)
      {
        test: /[\\/]fonts|node_modules[\\/].+(woff(2)?|ttf|otf|eot|svg)$/,
        type: 'asset/resource',
        generator: {
          // group fonts by name
          filename: (pathData) => `assets/fonts/${path.basename(path.dirname(pathData.filename))}/[name][ext][query]`,
        },
      },

      // images (load from `images` directory only)
      {
        test: /[\\/]images[\\/].+(png|jpe?g|svg|webp|ico)$/,
        oneOf: [
          // inline image using `?inline` query
          {
            resourceQuery: /inline/,
            type: 'asset/inline',
          },
          // auto inline by image size
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 1024,
              },
            },
            generator: {
              filename: 'assets/img/[name][ext]',
            },
          },
        ],
      },
    ],
  },

  performance: {
    hints: false, // don't show the size limit warning when a bundle is bigger than 250 KB
  },

  devServer: {
    //open: true, // open browser
    compress: true,

    static: {
      directory: path.join(__dirname, './dist'),
    },

    // enable HMR
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },

    // rewrite rules
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /./, to: '/404.html' },
      ],
    },
  },
};
