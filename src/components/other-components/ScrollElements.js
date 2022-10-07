export function GetScrollElements(id_menu, size_array){
    let elements = [];
    for (let i = 1; i < size_array+1; i++){
        elements[i] = document.getElementById(id_menu+'id-'+i+'-element');
    }
    return elements;
}

export function ScrollElement(id, elements){
    for (let i = 1; i < elements.length; i++){
        elements[i].style.display = 'none';
    }
    elements[id].style.display = 'block';
}