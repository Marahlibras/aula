import {useState, useEffect} from 'react'
import { FaAudioDescription } from 'react-icons/fa'

export default function  ItemForm({onSubit, initialData = null}) {
    const [formData, setFormData] = useState ( {
        title: "",
        description: "",
    })
}

useEffect(() => {
    if(initialData){
        setFormData(inicialData)
    }
}, [inicialData]);

const handleSubmit = (e) => {
    e.preventDefault();
    onSubit(formData)
}


return (
    <form onSubmit=
    {handleSubmit} className="space-y-4 mb-8">
        <div>
            <label className='block text-sm font-medium text-gray-700'>Titulo</label>
            <input type="text" value={formData.title} onChange={(e) =>
                setFormData({... formData,title: e.target.value})} required >
                    />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-fray-700'>Descrição</label>
                        <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        className='mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-800'
                        >
                            {initialData ? "Atualizar": "Criar"
                            </button>
                                
                            }
                        }
                    </div>
                </input>
        </div>
    </form>
)