function listar(req, res) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users', (err, user) => {
            if (err) {
                res.json(err);
            }
            res.render('vistasCrud/listar', { user });
        })
    });
}

function agregar(req, res) {
    res.render('vistasCrud/agregar');
}

function guardar(req, res) {
    const datos = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO users SET ?', [datos], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/listar');
        })
    });
}

function eliminar(req, res) {
    const id = req.body.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/listar');
        })
    })
}

function editar(req, res) {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users WHERE id = ?', [id], (err, user) => {
            if (err) {
                res.json(err);
            }
            res.render('vistasCrud/editar', { user });
        })
    });
}

function actualizar(req, res) {
    const id = req.params.id;
    const datos = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE users SET ? WHERE id = ?', [datos, id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/listar');
        })
    })
}

module.exports = {
    listar: listar,
    agregar: agregar,
    guardar: guardar,
    eliminar: eliminar,
    editar: editar,
    actualizar: actualizar,
}