/* istanbul ignore file */
import consoleOutput from './console';
import githubOutput from './github-pr';

import type { Output } from '../types';

const outputs: Output[] = [consoleOutput, githubOutput];

export const getAllOutputs = (): Output[] => outputs;
