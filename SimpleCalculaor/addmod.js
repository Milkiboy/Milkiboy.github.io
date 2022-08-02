

    exports.add = function (req,res,vals) {
        var sum = parseInt(vals.first) + parseInt(vals.second);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<head><meta charset=\"utf-8\"/>");
        res.write("<title>Calculator Web Site</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<p>The Answer is: ");
        res.write(String(sum));
        res.write("</p>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
        };

        exports.miinus = function (req,res,vals) {
            var dif = parseInt(vals.first) - parseInt(vals.second);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<!DOCTYPE html>");
            res.write("<html>");
            res.write("<head><meta charset=\"utf-8\"/>");
            res.write("<title>Calculator Web Site</title>");
            res.write("</head>");
            res.write("<body>");
            res.write("<p>The Answer is: ");
            res.write(String(dif));
            res.write("</p>");
            res.write("</body>");
            res.write("</html>");
            return res.end();
            };

            exports.add = function (req,res,vals) {
                var mul = parseInt(vals.first) * parseInt(vals.second);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("<!DOCTYPE html>");
                res.write("<html>");
                res.write("<head><meta charset=\"utf-8\"/>");
                res.write("<title>Calculator Web Site</title>");
                res.write("</head>");
                res.write("<body>");
                res.write("<p>The Answer is: ");
                res.write(String(mul));
                res.write("</p>");
                res.write("</body>");
                res.write("</html>");
                return res.end();
                };

                exports.add = function (req,res,vals) {
                    var divv = parseInt(vals.first) / parseInt(vals.second);
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write("<!DOCTYPE html>");
                    res.write("<html>");
                    res.write("<head><meta charset=\"utf-8\"/>");
                    res.write("<title>Calculator Web Site</title>");
                    res.write("</head>");
                    res.write("<body>");
                    res.write("<p>The Answer is: ");
                    res.write(String(divv));
                    res.write("</p>");
                    res.write("</body>");
                    res.write("</html>");
                    return res.end();
                    };