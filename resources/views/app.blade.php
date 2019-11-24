<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153174385-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-153174385-1');
        </script>

        <meta charset="utf-8">
        <title>Albert Ramos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/dist/app.css?{{ config('app.version') }}" />
    </head>
    <body>
        <div id="app"></div>
        <script src="/dist/app.js?{{ config('app.version') }}"></script>
    </body>
</html>
