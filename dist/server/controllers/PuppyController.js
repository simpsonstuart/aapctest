"use strict";
var PuppyBusiness = require("./../app/business/PuppyBusiness");
var PuppyController = (function () {
    function PuppyController() {
    }
    PuppyController.prototype.create = function (req, res) {
        try {
            var Puppy = req.body;
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.create(Puppy, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    PuppyController.prototype.update = function (req, res) {
        try {
            var Puppy = req.body;
            var _id = req.params._id;
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.update(_id, Puppy, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    PuppyController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    PuppyController.prototype.retrieve = function (req, res) {
        try {
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.retrieve(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    PuppyController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return PuppyController;
}());
module.exports = PuppyController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL1B1cHB5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsK0RBQWtFO0FBSWxFO0lBQUE7SUFpRkEsQ0FBQztJQS9FRyxnQ0FBTSxHQUFOLFVBQU8sR0FBb0IsRUFBRSxHQUFxQjtRQUM5QyxJQUFJLENBQUM7WUFFRCxJQUFJLEtBQUssR0FBNkIsR0FBRyxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07Z0JBQ3RDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQztvQkFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUk7b0JBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FDQTtRQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxDQUFDLENBQUM7UUFFakQsQ0FBQztJQUNMLENBQUM7SUFDRCxnQ0FBTSxHQUFOLFVBQU8sR0FBb0IsRUFBRSxHQUFxQjtRQUM5QyxJQUFJLENBQUM7WUFDRCxJQUFJLEtBQUssR0FBNkIsR0FBRyxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLEdBQUcsR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLGFBQWEsQ0FBQyxNQUFN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Q0FBQyxDQUFDLENBQUM7UUFDUCxDQUNBO1FBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFDLENBQUMsQ0FBQztRQUVqRCxDQUFDO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FqRkEsQUFpRkMsSUFBQTtBQUNELGlCQUFTLGVBQWUsQ0FBQyIsImZpbGUiOiJjb250cm9sbGVycy9QdXBweUNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBQdXBweUJ1c2luZXNzID0gcmVxdWlyZShcIi4vLi4vYXBwL2J1c2luZXNzL1B1cHB5QnVzaW5lc3NcIik7XG5pbXBvcnQgSUJhc2VDb250cm9sbGVyID0gcmVxdWlyZShcIi4vQmFzZUNvbnRyb2xsZXJcIik7XG5pbXBvcnQgSVB1cHB5TW9kZWwgPSByZXF1aXJlKFwiLi8uLi9hcHAvbW9kZWwvaW50ZXJmYWNlcy9QdXBweU1vZGVsXCIpO1xuXG5jbGFzcyBQdXBweUNvbnRyb2xsZXIgaW1wbGVtZW50cyBJQmFzZUNvbnRyb2xsZXIgPFB1cHB5QnVzaW5lc3M+IHtcblxuICAgIGNyZWF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIHZhciBQdXBweTogSVB1cHB5TW9kZWwgPSA8SVB1cHB5TW9kZWw+cmVxLmJvZHk7XG4gICAgICAgICAgICB2YXIgcHVwcHlCdXNpbmVzcyA9IG5ldyBQdXBweUJ1c2luZXNzKCk7XG4gICAgICAgICAgICBwdXBweUJ1c2luZXNzLmNyZWF0ZShQdXBweSwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwic3VjY2Vzc1wifSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBQdXBweTogSVB1cHB5TW9kZWwgPSA8SVB1cHB5TW9kZWw+cmVxLmJvZHk7XG4gICAgICAgICAgICB2YXIgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcbiAgICAgICAgICAgIHZhciBwdXBweUJ1c2luZXNzID0gbmV3IFB1cHB5QnVzaW5lc3MoKTtcbiAgICAgICAgICAgIHB1cHB5QnVzaW5lc3MudXBkYXRlKF9pZCwgUHVwcHksIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgICAgICAgdmFyIHB1cHB5QnVzaW5lc3MgPSBuZXcgUHVwcHlCdXNpbmVzcygpO1xuICAgICAgICAgICAgcHVwcHlCdXNpbmVzcy5kZWxldGUoX2lkLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHtcInN1Y2Nlc3NcIjogXCJzdWNjZXNzXCJ9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXRyaWV2ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIHZhciBwdXBweUJ1c2luZXNzID0gbmV3IFB1cHB5QnVzaW5lc3MoKTtcbiAgICAgICAgICAgIHB1cHB5QnVzaW5lc3MucmV0cmlldmUoKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZChyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRCeUlkKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgdmFyIF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XG4gICAgICAgICAgICB2YXIgcHVwcHlCdXNpbmVzcyA9IG5ldyBQdXBweUJ1c2luZXNzKCk7XG4gICAgICAgICAgICBwdXBweUJ1c2luZXNzLmZpbmRCeUlkKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZChyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcblxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0ID0gUHVwcHlDb250cm9sbGVyOyJdfQ==
