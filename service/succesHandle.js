function successHandle(res, post) {
    res.send({
        status: 'true',
        data: post
    }).end();
};

module.exports = successHandle;