import * as path from 'path';
import * as vsc from 'vscode';

const DEFAULT_PATH = 'crocods';


export function getPlatformSuffix(platform?: string) : string {
    if (process.platform === 'darwin') {
        return ".osx";
    }
    if (process.platform === 'win32') {
        return ".windows";
    }
    if (process.platform === 'linux') {
        return ".linux";
    }
    return "";
}

export function getExtensionConfig() : vsc.WorkspaceConfiguration {
    return vsc.workspace.getConfiguration('crocods');
}

export function executablePath() : string {
    const config = getExtensionConfig();

    return config.get<string>(`executablePath${getPlatformSuffix()}`, DEFAULT_PATH);
}