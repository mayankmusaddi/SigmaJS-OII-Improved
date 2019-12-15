
    this.search = function (a) {
        var arr = a.split(",").map(item => item.trim());
        var c = [];
        this.results.empty();
        var sr = ["<b>Search Results: </b>"];
        for(var i=0;i<arr.length;i++)
        {
            a = arr[i];
            var b = !1,
                b = this.exactMatch ? ("^" + a + "$").toLowerCase() : a.toLowerCase(),
                g = RegExp(b);
            this.exactMatch = !1;
            this.searching = !0;
            this.lastSearch = a;
            if (2 >= a.length) sr.push("<i>"+a+": You must search for a name with a minimum of 3 letters.</i>");
            else 
            {
                sigInst.iterNodes(function (a) {
                    g.test(a.label.toLowerCase()) && c.push({
                        id: a.id,
                        name: a.label
                    })
                });
                c.length ? (b = !0, nodeActive(c[0].id)) : b = showCluster(a);
                console.log(c.length);
                // c.push({ id: "61", name: "Os10g0516800" });
                // c.length ? (b = !0, nodesActive(c)) : b = showCluster(a);
                if (1 < c.length) for (var d = 0, h = c.length; d < h; d++) a.push('<a href="#' + c[d].name + '" onclick="nodeActive(\'' + c[d].id + "')\">" + c[d].name + "</a>");
                0 == c.length && !b && a.push("<i>No results found.</i>");
                1 < a.length && this.results.html(a.join(""));
            }
        }
        //this.results is just the search results div
        if(c.length!=1) this.results.show();
        if(c.length==1) this.results.hide();   
    }

    this.search = function (a) {
        console.log("First  a : ",a);
        var b = !1,
            c = [],
            b = this.exactMatch ? ("^" + a + "$").toLowerCase() : a.toLowerCase(),
            g = RegExp(b);
        this.exactMatch = !1;
        this.searching = !0;
        this.lastSearch = a;
        this.results.empty();
        if (2 >= a.length) this.results.html("<i>You must search for a name with a minimum of 3 letters.</i>");
        else {
            console.log(a);
            sigInst.iterNodes(function (a) {
                g.test(a.label.toLowerCase()) && c.push({
                    id: a.id,
                    name: a.label
                })
            });
            c.push({ id: "61", name: "Os10g0516800" });
            console.log("c : ",c);  
            c.length ? (b = !0, nodeActive(c[0].id), nodeActive(c[1].id)) : b = showCluster(a);
            a = ["<b>Search Results: </b>"];
            if (1 < c.length) for (var d = 0, h = c.length; d < h; d++) a.push('<a href="#' + c[d].name + '" onclick="nodeActive(\'' + c[d].id + "')\">" + c[d].name + "</a>");
            0 == c.length && !b && a.push("<i>No results found.</i>");
            1 < a.length && this.results.html(a.join(""));
           }
        //this.results is just the search results div
        if(c.length!=1) this.results.show();
        if(c.length==1) this.results.hide();   
    }