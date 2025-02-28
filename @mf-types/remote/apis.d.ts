
    export type RemoteKeys = 'remote/Counter' | 'remote/Card';
    type PackageType<T> = T extends 'remote/Card' ? typeof import('remote/Card') :T extends 'remote/Counter' ? typeof import('remote/Counter') :any;