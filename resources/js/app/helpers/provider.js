const Provider = {
    
    getCompanies: function() {
        return {
            'example': {
                'dirPerm': 'Exp',
                'dates': 'When',
                'name': 'Company',
                'position': 'Position'
            },
            'motto': {
                'dirPerm': 'drwxr-xr-x',
                'dates': 'oct 2017 - current',
                'name': 'Motto',
                'position': 'Project Lead Developer'
            },
            'visyon-360': {
                'dirPerm': 'drwx------',
                'dates': 'oct 2016 - jul 2017',
                'name': 'Visyon 360',
                'position': 'Full Stack'
            },
            'win-world': {
                'dirPerm': '-r--------',
                'dates': 'aug 2013 - set 2016',
                'name': 'Win World',
                'position': 'Full Stack'
            }
        };
    }
}

export default Provider