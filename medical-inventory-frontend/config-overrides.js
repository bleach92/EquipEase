import webpack from 'webpack';
import path from 'path-browserify';
import stream from 'stream-browserify';
import { Buffer } from 'buffer';
import process from 'process/browser';
import assert from 'assert/';
import zlib from 'browserify-zlib';
import constants from 'constants-browserify';
import url from 'url';
import util from 'util/';

export default function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path,
    fs: false,
    stream,
    http: false,
    https: false,
    child_process: false,
    readline: false,
    net: false,
    os: false,
    url,
    util,
    process,
    assert,
    zlib,
    constants,
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process,
      Buffer: [Buffer],
    })
  );

  return config;
}
