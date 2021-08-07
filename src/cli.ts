import * as chokidar from 'chokidar'
import { createClassUtils } from './class-utils';
import { createCssFile } from './cssFile';
import { createDogtailCssCompiler } from './dogtailcss';
import { createFileTracker } from './file-utils/extractClasses';
import { theme } from './theme';

const defaultPatterns = ['src/**/*.html','src/**/*.vue', 'src/**/*.jsx', 'src/**/*.tsx']

const tracker = createFileTracker(defaultPatterns, createCssFile('src/dogtail.css',theme,createDogtailCssCompiler(createClassUtils(), theme)))

let watcher = chokidar.watch(defaultPatterns, {persistent: true, ignoreInitial: true})
watcher
  .on('add', path => tracker(path))
  .on('change', path => tracker(path))
  .on('unlink', path => tracker(path))