<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('admin/css/admin.css') }}">
    <title>Vue master</title>
</head>
<body>
<div id="app">
    <router-view></router-view>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="{{ mix('admin/js/admin.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
