import { resolve } from 'path';

export default {
    root: './src/frontend',
    server: {
        open: "user/user.html",
        open: "admin/superadmin.html",
        open: "admin/admin.html",
    },
    build: {
        outDir: resolve(__dirname, '../../dist/user'),
        emptyOutDir: true
    }
};